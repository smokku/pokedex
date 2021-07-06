import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameSumFieldsModelBase } from "./PokemonV2NaturenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameSumFieldsModel */
export interface PokemonV2NaturenameSumFieldsModelType extends Instance<typeof PokemonV2NaturenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameSumFieldsModel */
export { selectFromPokemonV2NaturenameSumFields, pokemonV2NaturenameSumFieldsModelPrimitives, PokemonV2NaturenameSumFieldsModelSelector } from "./PokemonV2NaturenameSumFieldsModel.base"

/**
 * PokemonV2NaturenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2NaturenameSumFieldsModel = PokemonV2NaturenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
