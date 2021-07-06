import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameSumFieldsModelBase } from "./PokemonV2MovemetaailmentnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameSumFieldsModel */
export interface PokemonV2MovemetaailmentnameSumFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameSumFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameSumFields, pokemonV2MovemetaailmentnameSumFieldsModelPrimitives, PokemonV2MovemetaailmentnameSumFieldsModelSelector } from "./PokemonV2MovemetaailmentnameSumFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetaailmentnameSumFieldsModel = PokemonV2MovemetaailmentnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
