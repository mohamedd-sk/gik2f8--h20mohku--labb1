const DetailedBookListItem= (book) => { 
  let image = book.coverImage;          
  if (!image) { 

 image = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  }
  return `
 <section id="detailSection" class="border-slate-700 border-t py-2">
<div class=""book__details absolute inset-x-1 divide-y border-x-4 border-black  bg-blue-300 p-2 w-48 top-10 mx-8"">
 <a class="w-3/4 h-1/1 p-2 pr-5 pl-0" href="${image}"><img class="" src="${image}" alt="Book Cover Image"></a>
<div class="flex flex-col">
 <p class="pl-2">Release Date: ${book.releaseDate}</p>
 <p class="pl-2">Author: ${book.author}</p>
 <p class="pl-2">Title: ${book.title}</p>
 <p class="pl-2">Pages: ${book.pages}</p>
<p class="pl-2">Description: </p>
   </div>
</div>
    </section>
  `
}