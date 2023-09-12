# THE PAUL GEE 301 GENERATOR

## Requirements

Please take the list of URLs from this file:
[https://www.dropbox.com/scl/fi/nbpfjo0a773syeaj8ey58/exhibit-archives-new-format.txt?rlkey=e4lb4j2q1eoxp2z9teqlunil9&dl=0](https://www.dropbox.com/scl/fi/nbpfjo0a773syeaj8ey58/exhibit-archives-new-format.txt?rlkey=e4lb4j2q1eoxp2z9teqlunil9&dl=0)

And please output each url to a corresponding command in this file:
[https://www.dropbox.com/scl/fi/hvhx9eyvi4odmgirythqu/arcgallery-page-mapping.txt?rlkey=mmha46ha6la2o4jtvgc6c7n5s&dl=0](https://www.dropbox.com/scl/fi/hvhx9eyvi4odmgirythqu/arcgallery-page-mapping.txt?rlkey=mmha46ha6la2o4jtvgc6c7n5s&dl=0)

### Notes

- I've already de-duped the first file so nothing in the first file is already in the second file (so they are both ready to merge without risk of duplicating lines)
- The first file contains full urls of the final format. for instance, the first url is:
  > `<loc>https://www.arcgallery.org/exhibitions-archive/30th-anniversary-exhibition</loc>`
- I need it converted to a command in this format where the XXXs are the variable and the rest of the command is the template for every output line:
  > `/XXX/ -> /exhibitions-archive/XXX/ 301`
- So in the case of the first example, it should convert to this:
  > `/30th-anniversary-exhibition/ -> /exhibitions-archive/30th-anniversary-exhibition/ 301`

## Running The Program

- Clone the program:

  > `git clone https://github.com/swimclan/gee-301s.git`

- Install the dependencies

  > `npm i` or `yarn` (depending on the Node package manager you have installed)

- Run the program

  > `npm start` or `yarn start`

- Look for the output file "301.txt". DONE!
