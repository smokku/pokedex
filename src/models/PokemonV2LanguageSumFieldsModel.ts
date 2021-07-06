import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageSumFieldsModelBase } from "./PokemonV2LanguageSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageSumFieldsModel */
export interface PokemonV2LanguageSumFieldsModelType extends Instance<typeof PokemonV2LanguageSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageSumFieldsModel */
export { selectFromPokemonV2LanguageSumFields, pokemonV2LanguageSumFieldsModelPrimitives, PokemonV2LanguageSumFieldsModelSelector } from "./PokemonV2LanguageSumFieldsModel.base"

/**
 * PokemonV2LanguageSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2LanguageSumFieldsModel = PokemonV2LanguageSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
