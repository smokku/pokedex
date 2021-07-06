import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextSumFieldsModelBase } from "./PokemonV2ItemeffecttextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextSumFieldsModel */
export interface PokemonV2ItemeffecttextSumFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextSumFieldsModel */
export { selectFromPokemonV2ItemeffecttextSumFields, pokemonV2ItemeffecttextSumFieldsModelPrimitives, PokemonV2ItemeffecttextSumFieldsModelSelector } from "./PokemonV2ItemeffecttextSumFieldsModel.base"

/**
 * PokemonV2ItemeffecttextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemeffecttextSumFieldsModel = PokemonV2ItemeffecttextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
