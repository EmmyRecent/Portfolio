export const metadata = {
  title: "CV - Chukwuemeka",
  description: "Download or view the cv of Chukwuemeka Eziagulu.",
};

const ResumePage = () => {
  return (
    <iframe
      src="/cv.pdf"
      className="w-full h-screen"
      title="Chukwuemeka Eziagulu CV"
    />
  );
};

export default ResumePage;
