import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameSumFieldsModelBase } from "./PokemonV2ItemnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameSumFieldsModel */
export interface PokemonV2ItemnameSumFieldsModelType extends Instance<typeof PokemonV2ItemnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameSumFieldsModel */
export { selectFromPokemonV2ItemnameSumFields, pokemonV2ItemnameSumFieldsModelPrimitives, PokemonV2ItemnameSumFieldsModelSelector } from "./PokemonV2ItemnameSumFieldsModel.base"

/**
 * PokemonV2ItemnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemnameSumFieldsModel = PokemonV2ItemnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
