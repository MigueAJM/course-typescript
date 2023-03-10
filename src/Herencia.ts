abstract class BasicData {
  constructor(
    public name: string,
    public description: string,
    protected created_at: Date,
    protected created_by: number
  ) {}
  get fullYear() {
    return this.created_at.getFullYear();
  }

  get fullDescription(): string {
    return `${this.name} - ${this.description}`;
  }

  abstract save(): void;
}

class Product extends BasicData {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    description: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, description, created_at, created_by);
  }

  override get fullDescription(): string {
    return `Product: ${super.fullDescription}`;
  }

  save(): void {
    console.log("Save");
  }
}

const product = new Product(
  100,
  1,
  "iPhone",
  "This is a smartphone",
  new Date(),
  1
);

class Category extends BasicData {
  public products: Product[] = [];
  constructor(
    name: string,
    description: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, description, created_at, created_by);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  override get fullDescription(): string {
    return `Category: ${super.fullDescription}`;
  }

  save(): void {
    console.log("Save");
  }
}

const category = new Category("Phones", "", new Date(), 1);
category.addProduct(product);

console.log(product.fullDescription);
