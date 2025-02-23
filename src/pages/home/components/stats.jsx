const stats = [
  {
    id: 1,
    name: "Platformamızda qeydiyyatdan keçmiş tələbələr",
    value: "500+",
  },
  { id: 2, name: "Xidmət haqqı", value: "35 AZN / saat" },
  { id: 3, name: "Müvəffəqiyyətlə imtahandan keçmə zəmanəti", value: "95%" },
];

export function TrustedBy() {
  return (
    <div className="bg-white pb-8 pt-24">
      <div className="mx-auto max-w-7xl my-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Minlərlə Müştəri Azərbaycanda Bizə Güvənir
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Təhlükəsiz və peşəkar sürücülük təlimi ilə yolunuzda inamla
              irəliləyin.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
