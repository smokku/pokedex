import { Instance } from "mobx-state-tree"
import { PokemonV2NatureSumFieldsModelBase } from "./PokemonV2NatureSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureSumFieldsModel */
export interface PokemonV2NatureSumFieldsModelType extends Instance<typeof PokemonV2NatureSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureSumFieldsModel */
export { selectFromPokemonV2NatureSumFields, pokemonV2NatureSumFieldsModelPrimitives, PokemonV2NatureSumFieldsModelSelector } from "./PokemonV2NatureSumFieldsModel.base"

/**
 * PokemonV2NatureSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2NatureSumFieldsModel = PokemonV2NatureSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
