export const getVisibleMovies = (movies, { text }) => {
    return movies
        .filter((movies) => {
            const textMatch = movies.title
                .toLowerCase()
                .includes(text.toLowerCase())
            return textMatch
        })
};

