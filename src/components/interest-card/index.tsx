import { AiFillPlayCircle } from 'react-icons/ai';
import { skeleton } from '../../utils';

const InterestCard = ({
  loading,
  shows,
}: {
  loading: boolean;
  shows: {
    header: string;
    display: boolean;
    items: {
      title: string;
      description: string;
      imageUrl: string;
      link: string;
      platform: string;
    }[];
  };
}) => {
  if (!shows.display) {
    return null;
  }

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              shows.header
            )}
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-3">
          {loading
            ? [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-3 card shadow-lg compact bg-base-100 p-4"
                >
                  {skeleton({ widthCls: 'w-full', heightCls: 'h-48' })}
                  {skeleton({ widthCls: 'w-full', heightCls: 'h-4 mt-4' })}
                  {skeleton({ widthCls: 'w-2/3', heightCls: 'h-4 mt-2' })}
                </div>
              ))
            : shows.items.map((show, index) => (
                <a
                  key={index}
                  href={show.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col space-y-3 card shadow-lg compact bg-base-100 cursor-pointer hover:shadow-2xl transition-shadow duration-200 p-4"
                >
                  <div className="relative">
                    <img
                      src={show.imageUrl}
                      alt={show.title}
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-50 rounded">
                      <AiFillPlayCircle className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{show.title}</h3>
                  <p className="text-sm text-base-content text-opacity-60">
                    {show.description}
                  </p>
                  <span className="text-sm text-primary">{show.platform}</span>
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default InterestCard; 