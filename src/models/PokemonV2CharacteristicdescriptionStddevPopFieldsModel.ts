import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionStddevPopFieldsModelBase } from "./PokemonV2CharacteristicdescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionStddevPopFieldsModel */
export interface PokemonV2CharacteristicdescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionStddevPopFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionStddevPopFields, pokemonV2CharacteristicdescriptionStddevPopFieldsModelPrimitives, PokemonV2CharacteristicdescriptionStddevPopFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2CharacteristicdescriptionStddevPopFieldsModel = PokemonV2CharacteristicdescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
