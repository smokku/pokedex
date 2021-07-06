import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessAggregateFieldsModelBase } from "./PokemonV2BerryfirmnessAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessAggregateFieldsModel */
export interface PokemonV2BerryfirmnessAggregateFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessAggregateFieldsModel */
export { selectFromPokemonV2BerryfirmnessAggregateFields, pokemonV2BerryfirmnessAggregateFieldsModelPrimitives, PokemonV2BerryfirmnessAggregateFieldsModelSelector } from "./PokemonV2BerryfirmnessAggregateFieldsModel.base"

/**
 * PokemonV2BerryfirmnessAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_berryfirmness"
 */
export const PokemonV2BerryfirmnessAggregateFieldsModel = PokemonV2BerryfirmnessAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
