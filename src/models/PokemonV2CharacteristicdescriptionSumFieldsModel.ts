import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionSumFieldsModelBase } from "./PokemonV2CharacteristicdescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionSumFieldsModel */
export interface PokemonV2CharacteristicdescriptionSumFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionSumFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionSumFields, pokemonV2CharacteristicdescriptionSumFieldsModelPrimitives, PokemonV2CharacteristicdescriptionSumFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionSumFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2CharacteristicdescriptionSumFieldsModel = PokemonV2CharacteristicdescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
