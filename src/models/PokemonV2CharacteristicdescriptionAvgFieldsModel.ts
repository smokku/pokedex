import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionAvgFieldsModelBase } from "./PokemonV2CharacteristicdescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionAvgFieldsModel */
export interface PokemonV2CharacteristicdescriptionAvgFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionAvgFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionAvgFields, pokemonV2CharacteristicdescriptionAvgFieldsModelPrimitives, PokemonV2CharacteristicdescriptionAvgFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionAvgFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2CharacteristicdescriptionAvgFieldsModel = PokemonV2CharacteristicdescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
