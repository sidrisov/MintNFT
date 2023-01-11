async function run() {
    const { create } = await import('ipfs-http-client');
    const ipfs = await create();
    
    // we added three attributes, add as many as you want!
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "Crimean NFT",
            attributes: [
            {
                "country": "Ukraine",
                "motto": "Crimea Is Ukraine"
            }
            ],
            // update the IPFS CID to be your image CID
            image: "https://ipfs.io/ipfs/QmVmTbnF4PJ3otaT7Pjqsbkt7XVeYkGuLmGTUkfSSPdsdf",
            description: "So much PLW3!"
        })
    };

    const result = await ipfs.add(metadata);
    console.log(result);

    process.exit(0);
}

run();
