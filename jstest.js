/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nfts= []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, painting, yearCreated, description) {
    const nft = {
        artist: name,
        paintingName: painting,
        yearCreated: yearCreated,
        description: description
    };
    //storing the nft in nfts array
    nfts.push(nft);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs (name, painting, yearCreated, description) {
    for (let i = 0; i < nfts.length; i++) {
        console.log('Artist: '+ nfts[i].artist);
        console.log('Painting Name: ' + nfts[i].paintingName);
        console.log('Year Created: ' + nfts[i].yearCreated);
        console.log('Description: ' +nfts[i].description);
        console.log('-----------------------------');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line
mintNFT('Vincent van Gogh', 'Starry Night', 1889, 'A famous painting of a starry night sky over a small town.');
mintNFT('Leonardo da Vinci', 'Mona Lisa', 1503, 'A portrait of a woman.');
mintNFT('Johannes Vermeer', 'Girl with the Pearl Earring', 1665, 'A young woman in exotic dress');
listNFTs();
console.log('Total Supply: ' + getTotalSupply());
