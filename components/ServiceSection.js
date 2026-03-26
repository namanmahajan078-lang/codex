export default function ServiceSection({ title, items, onSelect }) {
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold text-luxeGold">{title}</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-1 text-luxeCyan">{item.price}</p>
            <p className="mt-3 text-sm text-white/80">{item.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {item.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="btn-primary magnetic mt-5" onClick={() => onSelect(item)}>
              Buy with Stripe
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
