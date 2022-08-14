   package pc01815.Normal_J6.Entity;
// Generated Jul 17, 2022, 5:56:00 PM by Hibernate Tools 4.3.6.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

/**
 * Orderdetails generated by hbm2java
 */
@Data
@Entity
@Table(name = "orderdetails", catalog = "normal_j6")
public class Orderdetails implements java.io.Serializable {

	private Integer id;
	private Orders orders;
	private Products idProduct;
	private float unitPrice;
	private int quanlity;


	public Orderdetails() {
	}

	public Orderdetails(Orders orders, Products idProduct, float unitPrice, int quanlity) {
		this.orders = orders;
		this.idProduct = idProduct;
		this.unitPrice = unitPrice;
		this.quanlity = quanlity;

	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "Id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Id_order", nullable = false)
	public Orders getOrders() {
		return this.orders;
	}

	public void setOrders(Orders orders) {
		this.orders = orders;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Id_product", nullable = false)
	public Products getIdProduct() {
		return this.idProduct;
	}

	public void setIdProduct(Products idProduct) {
		this.idProduct = idProduct;
	}

	@Column(name = "UnitPrice", nullable = false, precision = 12, scale = 0)
	public float getUnitPrice() {
		return this.unitPrice;
	}

	public void setUnitPrice(float unitPrice) {
		this.unitPrice = unitPrice;
	}

	@Column(name = "Quanlity", nullable = false)
	public int getQuanlity() {
		return this.quanlity;
	}

	public void setQuanlity(int quanlity) {
		this.quanlity = quanlity;
	}



}
