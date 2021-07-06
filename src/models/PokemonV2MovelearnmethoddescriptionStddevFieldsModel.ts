import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionStddevFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionStddevFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionStddevFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionStddevFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionStddevFields, pokemonV2MovelearnmethoddescriptionStddevFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionStddevFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionStddevFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovelearnmethoddescriptionStddevFieldsModel = PokemonV2MovelearnmethoddescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
