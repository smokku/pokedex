import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameSumFieldsModelBase } from "./PokemonV2AbilitynameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameSumFieldsModel */
export interface PokemonV2AbilitynameSumFieldsModelType extends Instance<typeof PokemonV2AbilitynameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameSumFieldsModel */
export { selectFromPokemonV2AbilitynameSumFields, pokemonV2AbilitynameSumFieldsModelPrimitives, PokemonV2AbilitynameSumFieldsModelSelector } from "./PokemonV2AbilitynameSumFieldsModel.base"

/**
 * PokemonV2AbilitynameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2AbilitynameSumFieldsModel = PokemonV2AbilitynameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
