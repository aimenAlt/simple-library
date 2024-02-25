// OpenLibraryService.ts
import Book from "../interfaces/book";

const searchBooks = async (query: string): Promise<Book[]> => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    return data.docs.map((doc: any) => ({
      title: doc.title,
      authors: doc.author_name || [],
      firstPublishedYear: doc.first_publish_year,
      isbn: doc.isbn || [],
      numberOfPages: doc.number_of_pages_median || 0
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export default searchBooks;
