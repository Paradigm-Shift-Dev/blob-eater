import { list } from '@vercel/blob';
import { del } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';
 
export const runtime = 'edge';

// Helper function
function tooYoungToDie(uploadedAt: string, now: string): boolean {
    // Convert both times to Date objects
    const uploadedAtDate = new Date(uploadedAt);
    const nowDate = new Date(now);
    // Calculate the difference in milliseconds
    const difference = Math.abs(nowDate.getTime() - uploadedAtDate.getTime());
    // Convert the difference to minutes and check if it's less than 60
    return difference / 1000 / 60 < 60;
}

export async function GET(req: NextRequest) {
  const { blobs } = await list();
  const blobCount = blobs.length;
  let blobsEaten = 0;
  let bytes = 0;
  if (blobCount > 0) {
      try {
        for (let blob in blobs) {
            // While the BLOB EATER is young, we recommend to let it feed on all file types. 
            // The .pathname property could be used to filter feed if long term blob storage is needed
            const creationTimeStamp = blobs[blob].uploadedAt; 
            const creationTime = creationTimeStamp.toISOString(); // Creation time
            const currentTime = new Date().toISOString(); // Current time
            if (!tooYoungToDie(creationTime, currentTime)) {
                // Eat the blob!
                const blobUrl = blobs[blob].url;
                await del(blobUrl);
                blobsEaten = blobsEaten + 1;
                // Count the bytes eaten
                bytes = bytes + blobs[blob].size;
            }
        }
    } catch(error) {
        return new NextResponse(JSON.stringify(error), {
            status: 500,
        })
    }
  }
  const blobsLeft = blobCount - blobsEaten;
  const message = blobsEaten + ' blobs eaten. ' + blobsLeft + ' blobs left.';
  const payload = {
      result: message,
      bytesSaved: bytes
  };

  return new NextResponse(JSON.stringify(payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}