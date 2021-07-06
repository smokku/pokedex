import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionAggregateFieldsModelBase } from "./PokemonV2MovetargetdescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionAggregateFieldsModel */
export interface PokemonV2MovetargetdescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionAggregateFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionAggregateFields, pokemonV2MovetargetdescriptionAggregateFieldsModelPrimitives, PokemonV2MovetargetdescriptionAggregateFieldsModelSelector } from "./PokemonV2MovetargetdescriptionAggregateFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movetargetdescription"
 */
export const PokemonV2MovetargetdescriptionAggregateFieldsModel = PokemonV2MovetargetdescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
