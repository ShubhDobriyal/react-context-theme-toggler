const Content = () => {
  return (
    <main>
      <div className="container ">
        <div className="flex gap-2">
          <div className="bg-light h-10 min-w-10"></div>
          <div>
            <h2 className="mb-1 ">Some heading here</h2>
            <p className="mb-1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              quia, quidem tempore architecto similique magnam quae iure ex
              praesentium expedita et vero ut sapiente necessitatibus. Quia
              molestiae laboriosam necessitatibus laborum.
            </p>
            <button className="btn">Learn more</button>
          </div>
        </div>
        <p className="mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          quia, quidem tempore architecto similique magnam quae iure ex
          praesentium expedita et vero ut sapiente necessitatibus. Quia
          molestiae laboriosam necessitatibus laborum.
        </p>
      </div>
    </main>
  );
};

export default Content;
