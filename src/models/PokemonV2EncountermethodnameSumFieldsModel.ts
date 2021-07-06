import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameSumFieldsModelBase } from "./PokemonV2EncountermethodnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameSumFieldsModel */
export interface PokemonV2EncountermethodnameSumFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameSumFieldsModel */
export { selectFromPokemonV2EncountermethodnameSumFields, pokemonV2EncountermethodnameSumFieldsModelPrimitives, PokemonV2EncountermethodnameSumFieldsModelSelector } from "./PokemonV2EncountermethodnameSumFieldsModel.base"

/**
 * PokemonV2EncountermethodnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EncountermethodnameSumFieldsModel = PokemonV2EncountermethodnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
