import { Instance } from "mobx-state-tree"
import { PokemonV2MoveSumFieldsModelBase } from "./PokemonV2MoveSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveSumFieldsModel */
export interface PokemonV2MoveSumFieldsModelType extends Instance<typeof PokemonV2MoveSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveSumFieldsModel */
export { selectFromPokemonV2MoveSumFields, pokemonV2MoveSumFieldsModelPrimitives, PokemonV2MoveSumFieldsModelSelector } from "./PokemonV2MoveSumFieldsModel.base"

/**
 * PokemonV2MoveSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveSumFieldsModel = PokemonV2MoveSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
