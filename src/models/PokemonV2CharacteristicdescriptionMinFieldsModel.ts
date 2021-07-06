import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionMinFieldsModelBase } from "./PokemonV2CharacteristicdescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionMinFieldsModel */
export interface PokemonV2CharacteristicdescriptionMinFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionMinFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionMinFields, pokemonV2CharacteristicdescriptionMinFieldsModelPrimitives, PokemonV2CharacteristicdescriptionMinFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionMinFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2CharacteristicdescriptionMinFieldsModel = PokemonV2CharacteristicdescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
