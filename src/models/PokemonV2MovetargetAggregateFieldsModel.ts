import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetAggregateFieldsModelBase } from "./PokemonV2MovetargetAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetAggregateFieldsModel */
export interface PokemonV2MovetargetAggregateFieldsModelType extends Instance<typeof PokemonV2MovetargetAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetAggregateFieldsModel */
export { selectFromPokemonV2MovetargetAggregateFields, pokemonV2MovetargetAggregateFieldsModelPrimitives, PokemonV2MovetargetAggregateFieldsModelSelector } from "./PokemonV2MovetargetAggregateFieldsModel.base"

/**
 * PokemonV2MovetargetAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movetarget"
 */
export const PokemonV2MovetargetAggregateFieldsModel = PokemonV2MovetargetAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
