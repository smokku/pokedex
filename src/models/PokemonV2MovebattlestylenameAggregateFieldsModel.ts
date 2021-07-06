import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameAggregateFieldsModelBase } from "./PokemonV2MovebattlestylenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameAggregateFieldsModel */
export interface PokemonV2MovebattlestylenameAggregateFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameAggregateFieldsModel */
export { selectFromPokemonV2MovebattlestylenameAggregateFields, pokemonV2MovebattlestylenameAggregateFieldsModelPrimitives, PokemonV2MovebattlestylenameAggregateFieldsModelSelector } from "./PokemonV2MovebattlestylenameAggregateFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movebattlestylename"
 */
export const PokemonV2MovebattlestylenameAggregateFieldsModel = PokemonV2MovebattlestylenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
