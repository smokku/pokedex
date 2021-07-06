import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionStddevPopFields, pokemonV2MovelearnmethoddescriptionStddevPopFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovelearnmethoddescriptionStddevPopFieldsModel = PokemonV2MovelearnmethoddescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
