const createEvent = (userId, name, location, date, id) => {
    return `
    <fieldset>
        <section>
            ${userId}
        </section>
        <seciton>
            <h4>${name}</h4>
        </seciton>
        <section>
            ${location}
        </section>
        <section>
            <time>${date}</time>
        </section>
        <button id="deleteEventButton--${id}" class="event__delete">Delete Event</button>
    </fieldset>
    `
}

module.exports = createEvent