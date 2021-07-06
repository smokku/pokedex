import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameSumFieldsModelBase } from "./PokemonV2ItempocketnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameSumFieldsModel */
export interface PokemonV2ItempocketnameSumFieldsModelType extends Instance<typeof PokemonV2ItempocketnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameSumFieldsModel */
export { selectFromPokemonV2ItempocketnameSumFields, pokemonV2ItempocketnameSumFieldsModelPrimitives, PokemonV2ItempocketnameSumFieldsModelSelector } from "./PokemonV2ItempocketnameSumFieldsModel.base"

/**
 * PokemonV2ItempocketnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItempocketnameSumFieldsModel = PokemonV2ItempocketnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
