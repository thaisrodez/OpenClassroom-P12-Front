/** Class formatting the user session data */

export class Session {
  /**
   * Get sessions data
   * @param {number} userId
   * @param {Object[]} sessions
   */
  constructor(userId, sessions) {
    (this.id = userId), (this.sessions = sessions);
  }

  /**
   * Get day label
   * @returns {string} The day label of a session
   */
  getDay(number) {
    const days = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    };
    return days[number];
  }

  /**
   * Get formatted data for line chart
   * @returns {Object[]} The sessions with the days as a key
   */
  formatSessions = () => {
    return this.sessions.map((session) => ({
      ...session,
      day: this.getDay(session.day),
    }));
  };
}
