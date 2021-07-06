import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionAggregateFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionAggregateFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionAggregateFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionAggregateFields, pokemonV2MovelearnmethoddescriptionAggregateFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionAggregateFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionAggregateFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movelearnmethoddescription"
 */
export const PokemonV2MovelearnmethoddescriptionAggregateFieldsModel = PokemonV2MovelearnmethoddescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
