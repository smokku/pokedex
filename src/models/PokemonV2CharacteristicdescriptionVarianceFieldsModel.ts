import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionVarianceFieldsModelBase } from "./PokemonV2CharacteristicdescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionVarianceFieldsModel */
export interface PokemonV2CharacteristicdescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionVarianceFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionVarianceFields, pokemonV2CharacteristicdescriptionVarianceFieldsModelPrimitives, PokemonV2CharacteristicdescriptionVarianceFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionVarianceFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2CharacteristicdescriptionVarianceFieldsModel = PokemonV2CharacteristicdescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
