import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameAggregateFieldsModelBase } from "./PokemonV2BerryflavornameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameAggregateFieldsModel */
export interface PokemonV2BerryflavornameAggregateFieldsModelType extends Instance<typeof PokemonV2BerryflavornameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameAggregateFieldsModel */
export { selectFromPokemonV2BerryflavornameAggregateFields, pokemonV2BerryflavornameAggregateFieldsModelPrimitives, PokemonV2BerryflavornameAggregateFieldsModelSelector } from "./PokemonV2BerryflavornameAggregateFieldsModel.base"

/**
 * PokemonV2BerryflavornameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_berryflavorname"
 */
export const PokemonV2BerryflavornameAggregateFieldsModel = PokemonV2BerryflavornameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
