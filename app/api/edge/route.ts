import { list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';
 
export const config = {
  runtime: 'edge',
};

// Helper function
function goneIn60Minutes(uploadedAt: string, now: string): boolean {
    // Convert both times to Date objects
    const uploadedAtDate = new Date(uploadedAt);
    const nowDate = new Date(now);
    // Calculate the difference in milliseconds
    const difference = Math.abs(nowDate.getTime() - uploadedAtDate.getTime());
    // Convert the difference to minutes and check if it's less than 60
    return difference / 1000 / 60 < 60;
}

export async function GET(req: NextRequest) {
  console.log('GET REQUEST');
  const { blobs } = await list();
  const blobCount = blobs.length;
  let blobsEaten = 0;
  let kilobytes = 0;
  if (blobCount > 0) {
      try {
          // do get 
        for (let blob in blobs) {
            // console.log(blobs[blob]);

            // While the BLOB EATER is young, we recommend to let it feed on all file types. 
            // The .pathname property could be used to filter feed if long term blob storage is needed
            const creationTimeStamp = blobs[blob].uploadedAt; 
            const creationTime = creationTimeStamp.toISOString(); // Creation time
            const currentTime = new Date().toISOString(); // Current time
            if (!goneIn60Minutes(creationTime, currentTime)) {
                // Eat the blob!
                blobsEaten = blobsEaten + 1;
                // Count the bytes eaten
                kilobytes = kilobytes + blobs[blob].size;
            }
        }
    } catch(error) {
        return new NextResponse(JSON.stringify(error), {
            status: 500,
        })
    }
  }
  const blobsLeft = blobCount - blobsEaten;
  const payload = {
    message: blobsEaten + ' blobs eaten. Blobs left ' + blobsLeft,
    imageUrl: 'https://blob-eater.vercel.app/BLOB-EATER-min.png'
  };

  return new NextResponse(JSON.stringify(payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}