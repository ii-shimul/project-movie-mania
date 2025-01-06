import React from "react";

const UserReviews = () => {
  const mockReviews = [
    {
      userAvatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg",
      userName: "John Doe",
      movieTitle: "Inception",
      comment: "Amazing movie with mind-blowing twists!",
      rating: 5,
    },
    {
      userAvatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-g3me6PZ5k2nb3HflJwnloMakJnOhqHHjQ&s",
      userName: "Jane Smith",
      movieTitle: "The Matrix",
      comment: "A classic sci-fi masterpiece!",
      rating: 4,
    },
    {
      userAvatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SSWxIdNQAGUETNcGiawynKjPqUGV0YtJKQ&s",
      userName: "Albert Einstein",
      movieTitle: "12 Angry Men",
      comment: "A classic masterpiece for genius people!",
      rating: 5,
    },
    {
      userAvatar:
        "https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/272094018_111421868102106_9153238832575092046_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFlFBefKEApcPUbxNV9ihgkDo8cwfgO7h0OjxzB-A7uHb_iXjeZkIm_7iqggAKxdVShUYxTSj3v-9TM35VTRrTl&_nc_ohc=E8Rr-NTMufMQ7kNvgFPiHxD&_nc_zt=23&_nc_ht=scontent.fdac31-2.fna&_nc_gid=A50BklMlDUuEqFFf-1u1DPT&oh=00_AYDvUAylJrLUQCyrbyyyaCIO81VA-JTGsSqV49QK2XLbpQ&oe=675BB79A",
      userName: "Random Wise Guy",
      movieTitle: "Mujib: The Making of a Nation",
      comment: "Bolle chakri thakbena",
      rating: 1,
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          User Reviews
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {mockReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.userAvatar}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {review.userName}
                  </h4>
                  <p className="text-sm text-gray-500">{review.movieTitle}</p>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <div className="mt-2 flex items-center text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-lg">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
