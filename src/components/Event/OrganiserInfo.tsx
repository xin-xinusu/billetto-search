const OrganiserInfo = ({ name }: { name: string }) => (
  <div className="p-4 bg-gray-900 text-white rounded-lg mt-4">
    <h4 className="text-lg font-semibold">Organizer</h4>
    <p>{name}</p>
    <button className="text-blue-500 mt-2">Contact</button>
  </div>
);

export default OrganiserInfo;
