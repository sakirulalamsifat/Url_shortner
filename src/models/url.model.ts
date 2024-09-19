import { Table, Column, Model, DataType, Sequelize,HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
@Table({ tableName: 'urls' })

export class UrlModel extends Model{
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement : true,
        primaryKey : true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    original_url: string;

    @Column({
        type: DataType.STRING
    })
    short_url: string;

    @Column({
        type: DataType.DATE,
        defaultValue : Sequelize.literal("(now() at time zone 'utc')")
    })
    created_at : Date;

    @Column({
        type: DataType.DATE,
        defaultValue : Sequelize.literal("(now() at time zone 'utc')")
    })
    updated_at: Date;


}