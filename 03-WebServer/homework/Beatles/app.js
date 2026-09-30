var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://imgs.search.brave.com/vGHY1jCRD-UyVK6StXh-BI6KaH4xgPfpn0VETPio_nU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdHMtdGhlLWNv/b2xlc3QtcGhvdG8t/b2Ytam9obi1sZW5u/b24tdjAtcWlsN3Fq/Z2x6NTRjMS5qcGVn/P3dpZHRoPTM4NCZm/b3JtYXQ9cGpwZyZh/dXRvPXdlYnAmcz0w/MTQ1YmVlY2M4NDUy/NzgxODQ5MjI3OGQ5/MWQzMjI5N2I0ZGU2/OTkz"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"https://imgs.search.brave.com/CSkrhhdZ2MnnPwwVEYHuCRvwcP-vyjgs8Vj5ICrk2AM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODUw/MDE2MTQvcGhvdG8v/cGF1bC1tY2NhcnRu/ZXktb2YtZW5nbGlz/aC1yb2NrLWFuZC1w/b3AtZ3JvdXAtdGhl/LWJlYXRsZXMtcGVy/Zm9ybXMtb24tc3Rh/Z2UtZHVyaW5nLXJl/aGVhcnNhbHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW1O/Vmt4Z3BMelMySXlv/Yk1uTEFPQnMtSmM3/LTgtUWN3NnNyMkJT/Q0hwUlk9"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://imgs.search.brave.com/M5cEi7Rlt4B7ustTtLxVxhiJTa3ibwbCQfiCJmxdDGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbnBy/b3ZpbmNpYS5jb20u/YXIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMTIvR2Vvcmdl/LUhhcnJpc29uLTY3/OHgzODEuanBn"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]
