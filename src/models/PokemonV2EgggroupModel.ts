import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupModelBase } from "./PokemonV2EgggroupModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupModel */
export interface PokemonV2EgggroupModelType extends Instance<typeof PokemonV2EgggroupModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupModel */
export { selectFromPokemonV2Egggroup, pokemonV2EgggroupModelPrimitives, PokemonV2EgggroupModelSelector } from "./PokemonV2EgggroupModel.base"

/**
 * PokemonV2EgggroupModel
 *
 * columns and relationships of "pokemon_v2_egggroup"
 */
export const PokemonV2EgggroupModel = PokemonV2EgggroupModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
