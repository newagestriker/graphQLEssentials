import Friends from "./dbConnectors.js";

const resolvers = {
  getFriend: ({ id }) => {
    return new Promise((resolve, object) => {
      Friends.findById(id, (err, friend) => {
        if (err) reject(err);
        return resolve(friend);
      });
    });
  },
  createFriend: ({ input }) => {
    const friend = new Friends({
      firstName: input.firstName,
      secondName: input.secondName,
      gender: input.gender,
      hobbies: input.hobbies,
    });

    friend.id = friend._id;

    return new Promise((resolve, object) => {
      friend.save((err) => {
        if (err) reject(err);
        else resolve(friend);
      });
    });
  },

  updateFriend: ({ input }) => {
    return new Promise((resolve, object) => {
      Friends.findOneAndUpdate(
        { _id: input.id },
        input,
        { new: true },
        (err, friend) => {
          if (err) reject(err);
          else resolve(friend);
        }
      );
    });
  },

  deleteFriend: ({ id }) => {
    return new Promise((resolve, object) => {
      Friends.remove({ _id: id }, (err) => {
        if (err) reject(err);
        resolve("Successfully deleted friend!");
      });
    });
  },
};

export default resolvers;
