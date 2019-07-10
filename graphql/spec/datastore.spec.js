const { books } = require('../data/datastore');

describe('The datastore', () => {

    it('should contain three book objects.', () => {
        // Assert
        expect(books.length).toBe(6);
    });

    it('should return the correct requested object.', () => {
        // Arrange
        const testBook = { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' };
        // Act
        const actual = books.find(book => book.id == testBook.id);
        // Assert
        expect(actual).toBeTruthy;
        expect(actual).toEqual(testBook);
    });

    it('should contain the correct expected content.', () => {
        // Arrange
        const testBook = { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' };
        // Act
        const actual = books.find(book => book.id == 1);
        // Assert
        expect(actual.name).toContain('the Wind', 'Name of');
        expect(actual.genre).toBe(testBook.genre);
    });
});