import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupMinFieldsModelBase } from "./PokemonV2EgggroupMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupMinFieldsModel */
export interface PokemonV2EgggroupMinFieldsModelType extends Instance<typeof PokemonV2EgggroupMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupMinFieldsModel */
export { selectFromPokemonV2EgggroupMinFields, pokemonV2EgggroupMinFieldsModelPrimitives, PokemonV2EgggroupMinFieldsModelSelector } from "./PokemonV2EgggroupMinFieldsModel.base"

/**
 * PokemonV2EgggroupMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EgggroupMinFieldsModel = PokemonV2EgggroupMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
