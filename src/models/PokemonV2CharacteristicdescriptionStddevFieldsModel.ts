import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionStddevFieldsModelBase } from "./PokemonV2CharacteristicdescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionStddevFieldsModel */
export interface PokemonV2CharacteristicdescriptionStddevFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionStddevFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionStddevFields, pokemonV2CharacteristicdescriptionStddevFieldsModelPrimitives, PokemonV2CharacteristicdescriptionStddevFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionStddevFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2CharacteristicdescriptionStddevFieldsModel = PokemonV2CharacteristicdescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
