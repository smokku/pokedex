import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionModelBase } from "./PokemonV2MovelearnmethoddescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionModel */
export interface PokemonV2MovelearnmethoddescriptionModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionModel */
export { selectFromPokemonV2Movelearnmethoddescription, pokemonV2MovelearnmethoddescriptionModelPrimitives, PokemonV2MovelearnmethoddescriptionModelSelector } from "./PokemonV2MovelearnmethoddescriptionModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionModel
 *
 * columns and relationships of "pokemon_v2_movelearnmethoddescription"
 */
export const PokemonV2MovelearnmethoddescriptionModel = PokemonV2MovelearnmethoddescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
