import ItemList from './item-list';

export default function Page() {
    return (
      <main className="bg-gray-100 text-black p-10">
        <h1 className="text-4xl font-semibold mb-4">Shopping List</h1>
        <div className="bg-white rounded p-4 shadow">
          <ItemList />
        </div>
      </main>
    );
  }

