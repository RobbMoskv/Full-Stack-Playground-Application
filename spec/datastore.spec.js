const books = require('../data/datastore');

describe('Datastore ', () => {

    it('should contain three book objects', () => {
        // Assert
        expect(books.length).toBe(3);
    });

    it('should return the correct requested object', () => {
        // Arrange
        const book = { name: 'Name of the Wind', genre: 'Fantasy', id: '1' };
        // Act
        const actual = books.find(book => book.id == 1);
        // Assert
        expect(actual).toBeTruthy;
        expect(actual).toEqual(book);
        expect(actual.name).toContain('the Wind', 'Name of');
    });
});