/** Class formatting the user activity data */

export class Activity {
  /**
   * Get activities data
   * @param {number} userId
   * @param {Object[]} activities
   */
  constructor(userId, activities) {
    (this.id = userId), (this.activities = activities);
  }

  /**
   * Get formatted data for bar chart
   * @returns {Object[]} The sessions with the days as a key
   */
  formatActivities() {
    return this.activities.map((activity) => ({
      ...activity,
      day: activity.day.substring(activity.day.length - 1),
    }));
  }
}
