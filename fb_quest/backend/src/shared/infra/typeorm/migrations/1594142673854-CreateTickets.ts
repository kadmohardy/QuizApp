import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateTickets1594142673854 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tickets',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'code',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'provider_id',
            type: 'uuid',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'validate_date',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'percenter_value',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'tickets',
      new TableForeignKey({
        name: 'TicketProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'providers',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('providers', 'TicketProvider');

    await queryRunner.dropTable('tickets');
  }
}
